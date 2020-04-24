export interface Course {
  id?: number;
  title?: string;
  duration?: number;
  'duration-unit'?: DurationUnit;
  description?: string;
}

enum DurationUnit {
  'day',
  'month',
  'year'
}
