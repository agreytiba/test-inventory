import React from 'react';
import CrudModule from '@/modules/CrudModule/CrudModule';
import ItemForm from '@/forms/ItemForm'; // Retaining ItemForm


export default function Inventory() {
 
    const entity = 'item'; // Updated entity name
    const searchConfig = {
        displayLabels: ['product'], // Adjusted to search by product
        searchFields: 'product',
        outputValue: '_id',
    };
    const entityDisplayLabels = ['product', 'description', 'unit', 'quantity', 'price']; // Adjusted to display inventory item labels

  const readColumns = [
    {
      title:'Product',
      dataIndex: 'product',
    },
    {
      title:'Desc',
      dataIndex: 'description',
    },
    {
      title:'Unit',
      dataIndex: 'unit',
    },
    {
      title:'Quantity',
      dataIndex: 'quantity',
    },
    {
      title:'Unit Price',
      dataIndex: 'price',
    },
    {
      title:'Unit Cost',
      dataIndex: 'unitCost',
    },
    {
      title:'Cost Account',
      dataIndex: 'account',
    },
    {
      title:'Vendor',
      dataIndex: 'vendor',
    },
    {
      title:'Tax',
      dataIndex: 'tax',
    },
  ];

  const dataTableColumns = [
    {
      title:'Product',
      dataIndex: ['product'],
    },
    {
      title:'Desc',
      dataIndex: ['description'],
    },
    {
      title:'Unit',
      dataIndex: ['unit'],
    },
    {
      title:'Quantity',
      dataIndex: ['quantity'],
    },
    {
      title:'Unit Price',
      dataIndex: ['price'],
    },
  ];

  const Labels = {
    PANEL_TITLE:'product',
    DATATABLE_TITLE:'product_list',
    ADD_NEW_ENTITY:'add_new_product',
    ENTITY_NAME:'product',
    CREATE_ENTITY:'save',
    UPDATE_ENTITY:'update',
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<ItemForm />} // Retaining ItemForm
      updateForm={<ItemForm isUpdateForm={true} />} // Retaining ItemForm
      config={config}
    />
  );
}
