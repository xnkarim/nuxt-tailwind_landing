export default async({ app}) => {
  app.head.script.push({ hid:'asd', innerHTML: 'alert("hello")', type: 'text/javascript', charset: 'utf-8' });
};
