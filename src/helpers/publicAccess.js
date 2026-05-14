function publicAccess(name) {
  return process.env.PUBLIC_URL + '/images' + name;
}

export { publicAccess };
