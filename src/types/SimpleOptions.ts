import SensorType from './Sensor';
import { Mapping } from './Mapping';

export interface SimpleOptions {
  imageUrl: string;
  forceImageRefresh: boolean;
  lockSensors: boolean;
  sensors: SensorType[];
  mappings: Mapping[];
  sensorsColorGray: number;
  sensorsColorRed: number;
  sensorsColorYellow: number;
  sensorsColorGreen: number;
}

type SensorColor = {
  sensorsColorGray: number;
  sensorsColorRed: number;
  sensorsColorYellow: number;
  sensorsColorGreen: number;
};

export default SensorColor;