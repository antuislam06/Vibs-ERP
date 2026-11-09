import React from 'react';
import CrudModule from '@/modules/CrudModule/CrudModule';
import TaxForm from '@/forms/TaxForm';

export default function Taxes() {
  const entity = 'taxes';
  const searchConfig = {
    displayLabels: ['taxName'],
    searchFields: 'taxName',
    outputValue: '_id',
  };

  const entityDisplayLabels = ['taxName'];

  const readColumns = [
    {
      title: 'Tax Name',
      dataIndex: 'taxName',
    },
    {
      title: 'Tax Value',
      dataIndex: 'taxValue',
    },
  ];

  const dataTableColumns = [
    {
      title: 'Tax Name',
      dataIndex: 'taxName',
    },
    {
      title: 'Tax Value',
      dataIndex: 'taxValue',
    },
  ];

  const ADD_NEW_ENTITY = 'Add new tax';
  const DATATABLE_TITLE = 'Taxes List';
  const ENTITY_NAME = 'tax';
  const CREATE_ENTITY = 'Create tax';
  const UPDATE_ENTITY = 'Update tax';

  const config = {
    entity,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };

  return (
    <CrudModule
      createForm={<TaxForm />}
      updateForm={<TaxForm isUpdateForm={true} />}
      config={config}
    />
  );
}
