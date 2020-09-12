
import {
  createMuiTheme,
  makeStyles,
  GridSpacing,
  ThemeProvider,
} from '@material-ui/core';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { withConsole } from '@storybook/addon-console';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import DateRangePicker from '../src/components/DateRangePicker';
import DateRangePickerInput from '../src/components/DateRangePickerInput';

const muiTheme = createMuiTheme({
  overrides: {
    MuiTextField: {
      root: {
        width: "525px"
      }
    },
    MuiInputBase: {
      input: {
        textAlign: 'center'
      }
    }
  }
});

storiesOf('Material Ui', module)
  .addDecorator((storyFn, context) => withConsole()(storyFn)(context))
  .add(
    'DateRangePicker Interactive',
    () => {
      return (
        <ThemeProvider theme={muiTheme}>
          <DateRangePicker
            onChange={(a: any)=>{console.log("Change", a)}}
          />
        </ThemeProvider>
      );
    },
    {
      info: {
        text: `
### Notes
  TODO
### Usage
~~~js
  <DateRangePicker
    onChange={(dateRange)=>{console.log("Change", dateRange)}}
  />
~~~
`,
      },
    }
  ).add(
    'DateRangePickerInput',
    () => {
      return (
        <ThemeProvider theme={muiTheme}>
          <DateRangePickerInput
            showStartAdornment={false}
            textFieldProps={{
              variant: "outlined",
              // label: " Date ",
              placeholder: "Datey"
            }}
            onChange={(a: any)=>{console.log("Change", a)}}
          />
        </ThemeProvider>
      );
    },
    {
      info: {
        text: `
### Notes
  TODO
### Usage
~~~js
  <DateRangePickerInput
    onChange={(dateRange)=>{console.log("Change", dateRange)}}
  />
~~~
`,
      },
    }
  );
