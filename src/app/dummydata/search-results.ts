export class SearchResults {
  allSearchResults = [
    "Avengers: Endgame",
    "The Lion King",
    "Star Wars: The Rise of Skywalker",
    "Frozen II",
    "Toy Story 4",
    "Captain Marvel",
    "Spider-Man: Far From Home",
    "Aladdin",
    "Joker",
    "John Wick: Chapter 3 – Parabellum",
    "A Dog's Way Home",
    "What Men Want"
  ]

  _getAllSearchResults (data) {
    return this.allSearchResults.sort( (o1, o2) => {
      if (o1.toLowerCase() == data.toLowerCase()) return 1;
      if (o1.toLowerCase().includes(data.toLowerCase().charAt(0))) return 1;
      if (o2.toLowerCase().includes(data.toLowerCase().charAt(0))) return -1;
      return 0;
    });
  }

  _searchResultsAfterFilter(data) {
    return this.allSearchResults.filter(
      result => result.toLowerCase().includes(data.toLowerCase())
    );
  }
}
