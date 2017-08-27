class Settings {
  constructor(y) {
    this.values = [];
    for (let j = 0; j < y; j++) {
      this.values[j] = j;
    }
  }

  pop() {
	  return this.values.pop();
  }

  push(newVal) {
    if (!this.values.includes(newVal)) {
      this.values.push(newVal);
    }
  }
}
