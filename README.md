# react-native-router-flux-drawer-example
An example of a React Native/Redux/Router/Drawer app

# The UI
The basic flow will be:
- Landing
- Item Listing
- Item Detail
	- with subitem listing
- Subitem Detail

Navigation will be:
- Home
	- to landing view
- Items
	- to item listing
	- add/select an item
		- to item detail
			- add/select a subitem
				- to subitem detail
- About
	- to simple about view

## The Data
- A list of items
- Each item has an id, name, description, status, and list of subitems
- Each subitem has an id, name, description
```javascript
[
	{
		"id": int,
		"status": bool,
		"name": string,
		"desc": string,		
		"subitems": [
			{
				"id": int,
				"name": string,
				"desc": string
			}
            ...
		]
	},
    ...
]
```

## State Management
Want to transform the nested structure returned by the (fictional) back end services into a flat structure appropriate for redux.

We'll use normalizr, which will produce this result:
```javascript
{
	"entities": {
		"items": {
			"int": {
				"id": int,
				"status": bool,
				"name": string,
				"desc": string,		
				"subitems": [int]

			},
			...
		},
		"subitems": {
			"int": {
				"id": int,
				"name": string,
				"desc": string
			}
		}
	},
	"result": [int]
}
```

### Store
The store will look like so:
```javascript
{
	"items": {
		"sort": [int],
		"table": {
			"int": {
				"id": int,
				"status": bool,
				"name": string,
				"desc": string,		
				"subitems": [int]
			},
			...			
		}
	},
	"subitems": {
		"int": {
			"id": int,
			"name": string,
			"desc": string
		}
	},
	"currentItem": {
		"id": int,
		"status": bool,
		"name": string,
		"desc": string,		
		"subitems": [int]							
	},
	"currentSubitem": {
		"id": int,
		"name": string,
		"desc": string		
	}
}
```

- items
	- sort: the ordered list of item ids
	- table: the master table of items
- subitem: the master table of subitems
	- all subitems for every item live here
- currentItem: the item currently being modified (in the ui)
- currentSubitem: the subitem currently being modified (in the ui)

### Reducers
Redux reducers for each level of state:
#### Items
- SET_ITEMS
	- action.value contains the item ids and items table from the normalized data
	- return the ids/items as the new state
- ADD_ITEM
	- action.value contains the new item
	- generate the new id for the item
	- return new state:
		- ids contains new id
		- table contains new item
- UPDATE_ITEM
	- action.value contains the item
	- return new state:
		- table updated with item
- REMOVE_ITEM
	- action.value contains the item
	- return new state:
		- remove id from sort
		- remove [id] from table

#### Item
- SELECT_ITEM
- UPDATE_SELECTED_ITEM
- ADD_SUBITEM
- UPDATE_SUBITEM
- REMOVE_SUBITEM

#### SubItems
- SET_SUBITEMS
- ADD_SUBITEM
- UPDATE_SUBITEM
- REMOVE_SUBITEM

#### SubItem
- SELECT_SUBITEM
- UPDATE_SELECTED_SUBITEM

### Actions
Redux actions for each level of state:
#### Items
- getAll
	- retrieves data from the service
	- normalizes data
	- dispatches
		- SET_ITEMS
		- SET_SUBITEMS
- update
- remove
- setStatus

#### Item
- select
	- dispatch SELECT_ITEM
- create
	- create a new item
	- dispatch SELECT_ITEM
- accept
	- dispatches
		- for new item, ADD_ITEM
		- for existing item, UPDATE_ITEM
- setStatus
	- dispatch UPDATE_SELECTED_ITEM
- setName
	- dispatch UPDATE_SELECTED_ITEM
- setDesc
	- dispatch UPDATE_SELECTED_ITEM

#### SubItems
- update
- remove

#### SubItem
- select
- create
- accept
- setName
- setDesc

## Resources
- [normalizr](https://github.com/paularmstrong/normalizr)
- [denormalizr](https://github.com/gpbl/denormalizr)
- [Using Normalizr in a Redux Store](https://medium.com/@mcowpercoles/using-normalizr-js-in-a-redux-store-96ab33991369#.7m9jtzfu4)
- [State Management in Redux](https://github.com/reactjs/redux/issues/994)
- [Redux-ORM : a "bigger" approach to normalization](https://github.com/tommikaikkonen/redux-orm)
- [Jest : you know, for testing](https://facebook.github.io/jest/)
