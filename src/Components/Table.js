import * as React from 'react';
import { DataTable } from 'react-native-paper';

const MyComponent = () => (
  <DataTable>
    <DataTable.Header>
      <DataTable.Title>Type de service</DataTable.Title>
      <DataTable.Title numeric>ID</DataTable.Title>
      <DataTable.Title numeric>Reponse</DataTable.Title>
    </DataTable.Header>

    <DataTable.Row>
      <DataTable.Cell>Service 1</DataTable.Cell>
      <DataTable.Cell numeric>1555239</DataTable.Cell>
      <DataTable.Cell numeric>Accepter</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Service 2</DataTable.Cell>
      <DataTable.Cell numeric>1562139</DataTable.Cell>
      <DataTable.Cell numeric>Non-Accepter</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Service 3</DataTable.Cell>
      <DataTable.Cell numeric>156239</DataTable.Cell>
      <DataTable.Cell numeric>En Attendre</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Service 4</DataTable.Cell>
      <DataTable.Cell numeric>512123</DataTable.Cell>
      <DataTable.Cell numeric>Accepter</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Service 5</DataTable.Cell>
      <DataTable.Cell numeric>2115412</DataTable.Cell>
      <DataTable.Cell numeric>Non-Accepter</DataTable.Cell>
    </DataTable.Row>

    <DataTable.Row>
      <DataTable.Cell>Service 6</DataTable.Cell>
      <DataTable.Cell numeric>15624639</DataTable.Cell>
      <DataTable.Cell numeric>Accepter</DataTable.Cell>
    </DataTable.Row>


    <DataTable.Pagination
      page={0}
      numberOfPages={2}
      onPageChange={page => {
        console.log(page);
      }}
      label="1-2 of 6"
    />
  </DataTable>
);

export default MyComponent;