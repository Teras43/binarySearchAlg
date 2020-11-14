describe("binarySearch", () => {
    it("should search the given array [1, 2, 3, 4, 5, 6, 7] for 6", () => {
        let array = [1, 2, 3, 4, 5, 6, 7];
        let value = 6;
        let result = 5;
    expect(binarySearch(value, array)).toEqual(result);
  });
    it("should search the given array [22, 78, 300, 452, 466, 500] for 78", () => {
        let array = [22, 78, 300, 452, 466, 500];
        let value = 78;
        let result = 1;
    expect(binarySearch(value, array)).toEqual(result);
    })
    it("should search the given array [10, 11, 12] for 10", () => {
        let array = [10, 11, 12];
        let value = 10;
        let result = 0;
    expect(binarySearch(value, array)).toEqual(result);
    })
    it("should search the given array [1024, 1080, 2016, 2020, 3000, 3005, 4499, 8000, 9000, 9001] for 3000", () => {
        let array = [1024, 1080, 2016, 2020, 3000, 3005, 4499, 8000, 9000, 9001];
        let value = 3000;
        let result = 4;
    expect(binarySearch(value, array)).toEqual(result);
    })
    it("should search the given array [55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 200, 500, 700, 1000, 10000] for 12", () => {
        let array = [55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 200, 500, 700, 1000, 10000];
        let value = 12;
        let result = null;
    expect(binarySearch(value, array)).toEqual(result);
    })
});
