import alt from '../alt';

class CartActions {
  add(id) {
    this.dispatch(id);
  }

  decrease(id) {
    this.dispatch(id);
  }

  increase(id) {
    this.dispatch(id);
  }

  remove(id) {
    this.dispatch(id);
  }

  clear() {
    this.dispatch();
  }
}

export default alt.createActions(CartActions);
