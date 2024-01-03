import React, { useState } from 'react';
import { Form, Input, InputNumber } from 'antd';
import AutoCompleteAsync from '../components/AutoCompleteAsync';
import AutoGetAll from '@/components/AutogetAll';
export default function ItemForm() {
  const [dataSelected, setDataSelected] =useState(null)
  // Renamed to InventoryForm for clarity
  return (
    <>
      <Form.Item
            name="item1"
            label="item one"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <AutoCompleteAsync
              entity={'Item'}
              displayLabels={['item']}
          searchFields={'item'}
          outputValue='product'
          onSelect={setDataSelected}
              // outputValue={autoCompleteUpdate}
            />
          </Form.Item>
      <Form.Item
        label="Item Two"
        name="item2"
        rules={[
          {
            required: true,
        
          },
        ]}
      >
            <AutoGetAll
              entity={'Item'}
              displayLabels={['item']}
          searchFields={'item'}
          outputValue='product'
          
              // outputValue={autoCompleteUpdate}
            />
      </Form.Item>
      <Form.Item
        label="New name"
        name="name"
        rules={[
          {
            required: true,
            message: 'Please add  new item name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Unit"
        name="unit"
        rules={[
          {
            required: true,
            message: 'Please input unit!',
          },
        ]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label="Unit Price"
        name="price"
        rules={[
          {
            required: true,
            message: 'Please input Unit Price!',
            type: 'number',
            min: 0, // Ensure non-negative numbers
          },
        ]}
      >
        <InputNumber
        
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')} // Optional: parse input as number
        />
      </Form.Item>
      <Form.Item
        label="Reason for Merge"
        name="reason"
        rules={[
          {
            required: true,
            message: 'Please input reason',
          },
        ]}
      >
        <Input />
          </Form.Item>
            <Form.Item
        label="description"
        name="desc"
        rules={[
          {
            required: true,
            message: 'Please input description!',
          },
        ]}
      >
        <Input />
      </Form.Item>
     
    </>
  );
}
