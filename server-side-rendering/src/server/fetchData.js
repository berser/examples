
export default async function fetchData(renderProps, state) {
  const componentsFetchData = renderProps.components
    .filter(component => component.fetchData)
    .map((component) => component.fetchData(renderProps, state));

  return Promise.all(componentsFetchData);
}
