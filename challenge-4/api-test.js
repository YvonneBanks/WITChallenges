const pickData = require("./index.js");
const sources = [1, 2, 3, 4];
console.log("1. al-jazeera-english\n2. bbc-news\n3. cnn\n4. abc-news\n");

const news_sources = {
1: "al-jazeera-english",
2: "bbc-news",
3: "cnn",
4: "abc-news"
};

test("Enter a number of one to get al-jazeera-english", () => {
expect(news_sources[1]).toBe("al-jazeera-english");
expect(news_sources[2]).toBe("bbc-news");
expect(news_sources[3]).toBe("cnn");
expect(news_sources[4]).toBe("abc-news");
});