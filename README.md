## base64.ewp.iia.example
This is an example of an IIA module improvement to be implemented in the EWP Dashboard platform.
Name of the page: IIA Search
Link: https://ewp-dashboard.eu/iias/iia-search

## Purpose
The aim of this contribution is to provide a fast IIA search functionality for the IIA module.
Currently (November 2025), the IIA search functionality is available via the "IIA List" page.
The "IIA List" provides real-time access to the IIA data, but it is not optimized for fast data searching.
Thanks to this project, EWP Dashboard will provide a fast IIA search functionality.

## How does it work?
1) The app fetches the data from either of the following:
- CSV file (downloaded from https://ewp-dashboard.eu/iias/export)
- base64 encoded CSV file (accessed via GraphQL API)
2) The data is decoded (base64 to CSV) and parsed (CSV to temporary database provided by alasql library).
3) When the user selects the Erasmus+ code or the partner institution name in the Autocomplete component (Material UI), the app builds an alasql query to fetch the data from the temporary database and shows the results in a table.

