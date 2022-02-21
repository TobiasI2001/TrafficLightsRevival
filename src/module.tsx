import React from 'react';
import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types/SimpleOptions';
import { ImageItPanel } from './ImageItPanel';
import { EditorSensorList } from 'customEditors/EditorSensorList';
import { EditorMappingList } from 'customEditors/EditorMappingList';
import { migrationHandler } from './migrationHandler';

export const plugin = new PanelPlugin<SimpleOptions>(ImageItPanel)
  .setMigrationHandler(migrationHandler)
  .setPanelOptions((builder) => {
    const panelOptionsBuilder = builder
      .addTextInput({
        path: 'imageUrl',
        name: 'Image URL',
        description: 'URL of background image',
        defaultValue: 'https://i.ibb.co/tLXrjb6/imageit.png',
      })
      .addBooleanSwitch({
        path: 'forceImageRefresh',
        name: 'Force image refresh',
        description:
          'Enable to force image refresh when data changes. Use only if cache control is not possible. Check readme on Github if not sure.',
        defaultValue: false,
      })
      .addBooleanSwitch({
        path: 'lockSensors',
        name: 'Lock sensors movement',
        defaultValue: false,
        category: ['Sensors'],
      })
      .addNumberInput({
        path: 'sensorsColorGray',
        name: 'Gray Color Value',
        description: 'Value of Sensor Color Gray. Default 0',
        defaultValue: 0,
        category: ['Sensors'],
      })
      .addNumberInput({
        path: 'sensorsColorRed',
        name: 'Red Color Value',
        description: 'Value of Sensor Color Red. Default 1',
        defaultValue: 1,
        category: ['Sensors'],
      })
      .addNumberInput({
        path: 'sensorsColorYellow',
        name: 'Yellow Color Value',
        description: 'Value of Sensor Color Yellow. Default 2',
        defaultValue: 2,
        category: ['Sensors'],
      })
      .addNumberInput({
        path: 'sensorsColorGreen',
        name: 'Green Color Value',
        description: 'Value of Sensor Color Green. Default 3',
        defaultValue: 3,
        category: ['Sensors'],
      })
      .addCustomEditor({
        id: 'sensors',
        path: 'sensors',
        name: 'Sensors',
        description: 'List of sensors',
        category: ['Sensors'],
        defaultValue: [],
        editor(props) {
          return <EditorSensorList sensors={props.value} onChange={props.onChange} />;
        },
      })
      .addCustomEditor({
        id: 'mappings',
        path: 'mappings',
        name: 'Mappings',
        description: 'List of mappings',
        category: ['Mappings'],
        defaultValue: [],
        editor(props) {
          return <EditorMappingList mappings={props.value} onChange={props.onChange} />;
        },
      });

    return panelOptionsBuilder;
  });
