import React, { useState, useEffect, useRef } from 'react';
import { request } from '@/request'; // Assuming you have a request module
import useOnFetch from '@/hooks/useOnFetch';
import { useDebounce } from 'react-use';
import { Select, Empty } from 'antd';

export default function AutoGetAll({
  entity,
  displayLabels,
  searchFields,
  outputValue = '_id',
  value,
  onChange,
  onSelect,
}) {
  const [selectOptions, setOptions] = useState([]);
  const [currentValue, setCurrentValue] = useState(undefined);
  const isUpdating = useRef(true);
  const isSearching = useRef(false);
  const [searching, setSearching] = useState(false);
  const [, cancel] = useDebounce(() => {}, 500); // No need for debouncing when fetching all values

  // Modify asyncSearch to get all values for the specified entity
  const asyncSearch = () => {
    return request.getAll({ entity }); // Assuming you have a method like request.getAll
  };

  // Call useFetch hook from the hooks folder
  const { onFetch, result, isSuccess, isLoading } = useOnFetch();

  const labels = (optionField) => {
    return displayLabels.map((x) => optionField[x]).join(' ');
  };

  useEffect(() => {
    const fetchOptions = async () => {
      onFetch(asyncSearch);
    };

    fetchOptions();

    return () => {
      cancel();
    };
  }, []); // Remove debouncedValue from the dependency array to fetch all values initially

  useEffect(() => {
    if (isSuccess) {
      setOptions(result);
    } else {
      setOptions([]);
    }
  }, [isSuccess, result]);

  useEffect(() => {
    // For updating Form, it's for setField
    if (value && isUpdating.current) {
      if (!isSearching.current) {
        setOptions([value]);
      }
      setCurrentValue(value[outputValue] || value); // set nested value or value
      onChange(value[outputValue] || value);
      isUpdating.current = false;
    }
  }, [value]);

  useEffect(() => {
    // Invoke the onSelect callback with the selected value
    if (onSelect && currentValue) {
      onSelect(currentValue);
    }
  }, [currentValue, onSelect]);

  return (
    <Select
      loading={isLoading}
      showSearch
      allowClear
      placeholder={'Search Here'}
      defaultActiveFirstOption={false}
      filterOption={false}
      notFoundContent={searching ? '... Searching' : <Empty />}
      value={currentValue}
      onChange={(newValue) => {
        if (onChange) {
          if (newValue) onChange(newValue[outputValue] || newValue);
        }
      }}
      onClear={() => {
        setOptions([]);
        setCurrentValue(undefined);
        setSearching(false);
      }}
    >
      {selectOptions.map((optionField) => (
        <Select.Option
          key={optionField[outputValue] || optionField}
          value={optionField[outputValue] || optionField}
        >
          {labels(optionField)}
        </Select.Option>
      ))}
    </Select>
  );
}
