import React from 'react';
import CrudModule from '@/modules/CrudModule/CrudModule';
import ItemMergeForm from '@/forms/ItemMergeForm'; // Retaining ItemMergeForm
export default function Inventory() {
 
    const entity = 'itemMerge'; // Updated entity name
    const searchConfig = {
        displayLabels: ['product'], // Adjusted to search by name
        searchFields: 'product',
        outputValue: 'product',
    };
    const entityDisplayLabels = ['name','item1','item2', 'description',  'reason', 'price','approvedBy']; // Adjusted to display inventory item labels

  const readColumns = [
    {
      title:'New Name',
      dataIndex: 'name',
    },
    {
      title:'item 1',
      dataIndex: 'item1',
    },
    {
      title:'Item 2',
      dataIndex: 'item2',
      },
     {
      title:'Unit Price',
      dataIndex: 'price',
    },
    {
      title:'Desc',
      dataIndex: 'desc',
    },

    {
      title:'reason',
      dataIndex: 'reason',
    },
   
    {
      title:'Approved',
      dataIndex: 'approvedBy',
    },
    {
      title:'Tax',
      dataIndex: 'tax',
    },
  ];

  const dataTableColumns = [
   {
      title:'New Name',
      dataIndex: 'name',
    },
    {
      title:'item 1',
      dataIndex: 'item1',
    },
    {
      title:'Item 2',
      dataIndex: 'item2',
      },
     {
      title:'Unit Price',
      dataIndex: 'price',
    },
   
  ];

  const Labels = {
    PANEL_TITLE:'item_merge',
    DATATABLE_TITLE:'item_merged_list',
    ADD_NEW_ENTITY:'New',
    ENTITY_NAME:'item_merged',
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
      createForm={<ItemMergeForm />} // Retaining ItemMergeForm
      updateForm={<ItemMergeForm isUpdateForm={true} />} // Retaining ItemMergeForm
      config={config}
    />
  );
}
