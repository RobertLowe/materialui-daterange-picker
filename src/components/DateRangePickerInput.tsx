import React, { useState } from 'react';
import { DateRange, NavigationAction, DefinedRange } from '../types';

import DateRangePicker from './DateRangePicker';

import { defaultRanges } from '../defaults';

import IconButton from '@material-ui/core/IconButton';
import OutlinedInput, { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ClearIcon from '@material-ui/icons/Clear';

import Popover from '@material-ui/core/Popover';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import { format } from 'date-fns';

interface IDateRangePickerInputProps {
  initialDateRange?: DateRange;
  definedRanges?: DefinedRange[];
  minDate?: Date | string;
  maxDate?: Date | string;
  textFieldProps?: TextFieldProps;
  onChange: (dateRange: DateRange) => void;
}

const DateRangePickerInput: React.FunctionComponent<IDateRangePickerInputProps> = (
  props: IDateRangePickerInputProps,
) => {
  const {
    onChange,
    initialDateRange,
    textFieldProps,
    minDate,
    maxDate,
    definedRanges = defaultRanges
  } = props;

  const [dateRange, setDateRange] = useState({
    startDate: undefined,
    endDate: undefined
  } as DateRange);

  const inputValue = (currentDateRange: DateRange) => {
    if(currentDateRange.startDate && currentDateRange.endDate) {
      const startDateFormatted = format(
        currentDateRange.startDate,
        'MM/DD/YYYY'
      );
      const endDateFormatted = format(
        currentDateRange.startDate,
        'MM/DD/YYYY'
      );

      return `${startDateFormatted} - ${endDateFormatted}`
    } else {
      return "";
    }
  }

  const handleOnChange = (event: any) => {
    setDateRange(event);
  }

  const clearDateRange = (event: any) => {
    const newDateRange: DateRange = {
      startDate: undefined,
      endDate: undefined
    }
    setDateRange(newDateRange);
    onChange(newDateRange);
  }

  return (
    <PopupState variant="popover" popupId="popover-datepicker">
      {(popupState) => (
        <div>
          <TextField
            id="adornment-datepicker"
            value={inputValue(dateRange)}
            InputProps={{
              startAdornment:
                <InputAdornment position="start" {...bindTrigger(popupState)}>
                  <IconButton aria-label="date-picker-calendar">
                    <DateRangeIcon />
                  </IconButton>
                </InputAdornment>,
              endAdornment: 
                <InputAdornment position="end">
                  <IconButton aria-label="date-picker-clear" onClick={clearDateRange}>
                    <ClearIcon />
                  </IconButton>
                </InputAdornment>
            }}
            {...textFieldProps}
            {...bindTrigger(popupState)}
          />
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <DateRangePicker
              initialDateRange={initialDateRange}
              minDate={minDate}
              maxDate={maxDate}
              definedRanges={definedRanges}
              onChange={handleOnChange}
            />
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default DateRangePickerInput;
