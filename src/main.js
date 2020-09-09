class App {
  constructor() {
    run = async (name = "world") => {
      console.log(`Hello, ${name}`);
    };
  }
}

const app = new App();
app.run().then(() => console.log());
