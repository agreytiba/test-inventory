import React from 'react';
import { Form, Input, InputNumber } from 'antd';

export default function ItemForm() {
  // Renamed to InventoryForm for clarity
  return (
    <>
      <Form.Item
        label="Product"
        name="product"
        rules={[
          {
            required: true,
            message: 'Please input Product name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: 'Please add  description',
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
            message: 'Please add  unit',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Quantity"
        name="quantity"
        rules={[
          {
            required: true,
            message: 'Please input Quantity!',
            type: 'number',
            min: 0, // Ensure non-negative numbers
          },
        ]}
      >
        <InputNumber />
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
          formatter={(value) => `$ ${value}`} // Optional: format value as currency
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')} // Optional: parse input as number
        />
      </Form.Item>
      <Form.Item
        label="Unit Cost"
        name="unitCost"
        rules={[
          {
            required: true,
            message: 'Please input Unit Cost!',
            type: 'number',
            min: 0, // Ensure non-negative numbers
          },
        ]}
      >
        <InputNumber
          formatter={(value) => `$ ${value}`} // Optional: format value as currency
          parser={(value) => value.replace(/\$\s?|(,*)/g, '')} // Optional: parse input as number
        />
          </Form.Item>
            <Form.Item
        label="Cost Account"
        name="account"
        rules={[
          {
            required: true,
            message: 'Please input Product name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
            <Form.Item
        label="Vendor"
        name="vendor"
       
      >
        <Input />
          </Form.Item>
           <Form.Item
        label="Tax"
        name="tax"
        rules={[
          {    
            type: 'number',
            min: 0, // Ensure non-negative numbers
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
    </>
  );
}
