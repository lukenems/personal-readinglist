import { bookReducer } from "./bookReducer";

describe("bookReducer", () => {
  test("Add_book returns correct state, and is pure", () => {
    const state = [];
    const action = {
      type: "ADD_BOOK",
      book: { title: "One Flew Over", author: "Ken Kesey" }
    };

    const result = bookReducer(state, action);

    expect(result).toEqual([
      { title: "One Flew Over", author: "Ken Kesey", id: expect.any(String) }
    ]);
    expect(state).toEqual([]);
  });

  test("Remove_book returns correct state and is pure", () => {
    const state = [
      { id: 1, title: "One Flew Over", author: "Ken Kesey" },
      { id: 2, title: "One Flew Over", author: "Ken Kesey" }
    ];
    const action = { type: "REMOVE_BOOK", id: 1 };
    const result = bookReducer(state, action);
    
    expect(result).toEqual([
      { id: 2, title: "One Flew Over", author: "Ken Kesey" }
    ]);
    expect(state).toEqual([
      { id: 1, title: "One Flew Over", author: "Ken Kesey" },
      { id: 2, title: "One Flew Over", author: "Ken Kesey" }
    ]);
  });
});
