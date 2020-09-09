# Material UI DateRange Picker

A react date range picker implementation using @material-ui.

## Preview

![Screenshot](/screenshot.png?raw=true "Screenshot")


## Basic example
```tsx
import React from "react";
import { DateRangePicker, DateRange } from "materialui-daterange-picker";

type Props = {}

const App: React.FunctionComponent<Props> = props => {
  const [dateRange, setDateRange] = React.useState<DateRange>({});

  const toggle = () => setOpen(!open);

  return (
    <DateRangePicker
      onChange={(range) => setDateRange(range)}
    />
  );
}

export default App;
```

## Types
```ts
interface DateRange {
    startDate?: Date,
    endDate?: Date
}

interface DefinedRange {
    label: string,
    startDate: Date,
    endDate: Date
}
```

## Props

Name | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
`onChange` | `(DateRange) => void` | _required_ | - | handler function for providing selected date range
`initialDateRange` | `DateRange` | _optional_ | `{}` | initially selected date range
`minDate` | `Date` or `string` | _optional_ | 10 years ago | min date allowed in range
`maxDate` | `Date` or `string` | _optional_ | 10 years from now | max date allowed in range
`definedRanges` | `DefinedRange[]` | _optional_ | - | custom defined ranges to show in the list

## Made possible by

<a href="https://github.com/robertlowe/materialui-daterange-picker/graphs/contributors">
  <img src="https://contributors-img.web.app/image?repo=robertlowe/materialui-daterange-picker" />
</a>
