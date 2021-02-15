export function toParams(query: string): { [key: string]: any } {
  const q = query.substring(1);
  return q.split('&').reduce((values, param) => {
    const [key, value] = param.split('=');

    const new_values = {
      ...values,
      [key]: value,
    };

    return new_values;
  }, {});
}

export function toQuery(params: { [key: string]: any }, delimiter = '&') {
  const keys = Object.keys(params);

  return keys.reduce((str, key, index) => {
    let query = `${str}${key}=${params[key]}`;

    if (index < keys.length - 1) {
      query += delimiter;
    }

    return query;
  }, '');
}
