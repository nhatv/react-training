# Shallow Copy (does not copy nested objects or arrays)

- Using the spread operator
  - const shallowCopy = [...obj]
- Using Object.assign()
  - const shallowCopy = Object.assign({}, obj)
    - First parameter is empty because we are making a new target object

# Deep Copy

- Using JSON.parse(JSON.stringify(obj)) on an object or array
  - const deepCopy = JSON.parse(JSON.stringify(original))
  - This does not work on all data types like Date
