const target1 = target =>
  Object.assign(document.querySelector(target), {
    dec() {
      this.value = Math.max(0, ~~this.value - 1);
    },

    inc() {
      this.value = ~~this.value + 1;
    }
  });

const target = target => [].slice.call(document.querySelectorAll(target));

const counter = target1(".counter__input");
const stickers = target("[name='stickers[]'");

target(".counter__button").forEach(
  element => (element.onclick = () => counter[element.dataset.operator]())
);

stickers.forEach(
  element =>
    (element.onclick = () => {
      const leastOne = stickers.some(sticker => sticker.checked);
      stickers.forEach(sticker => (sticker.required = !leastOne));
    })
);
