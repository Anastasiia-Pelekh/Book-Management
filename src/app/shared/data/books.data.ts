import { Book } from "../models/book.model";

export const BookList: Book[] = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    color: 'var(--gray-medium)',
    description: "A novel set in the American South during the 1930s, focusing on issues of racism and injustice as seen through the eyes of a young girl, Scout Finch."
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    color: 'var(--red-brown)',
    description: "A dystopian novel that explores the dangers of totalitarianism and extreme political ideology in a world where the government controls every aspect of life."
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    color: 'var(--dark-green)',
    description: "A classic romantic novel that follows Elizabeth Bennet as she navigates issues of manners, upbringing, morality, and marriage in early 19th-century England."
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    color: 'var(--dark-violet)',
    description: "A novel set in the Jazz Age that explores themes of decadence, idealism, and the American Dream through the mysterious millionaire Jay Gatsby."
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
    color: 'var(--gray-darker)',
    description: "An epic tale of obsession and revenge, chronicling Captain Ahab's relentless pursuit of the white whale Moby Dick across the seas."
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
    color: 'var(--light-green)',
    description: "A novel that follows Holden Caulfield, a teenager who has been expelled from school, as he wanders around New York City and grapples with issues of identity and belonging."
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
    color: 'var(--pastel)',
    description: "A fantasy novel that tells the story of Bilbo Baggins, a hobbit who embarks on an unexpected journey to reclaim a treasure guarded by a dragon."
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    year: 1932,
    color: 'var(--light-brown)',
    description: "A dystopian novel that explores a future society where humans are genetically engineered and controlled by technology, questioning the cost of progress and conformity."
  },
  {
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    year: 1884,
    color: 'var(--gray-medium)',
    description: "A novel that follows the adventures of a young boy, Huck Finn, as he travels down the Mississippi River with a runaway slave, exploring themes of freedom and morality."
  }
];

export const BookColors = [
  { name: 'Gray Medium', colorCode: 'var(--gray-medium)' },
  { name: 'Red Brown', colorCode: 'var(--red-brown)' },
  { name: 'Dark Green', colorCode: 'var(--dark-green)' },
  { name: 'Dark Violet', colorCode: 'var(--dark-violet)' },
  { name: 'Light Gray', colorCode: 'var(--light-gray)' },
  { name: 'Brown', colorCode: 'var(--brown)' },
  { name: 'Light Green', colorCode: 'var(--light-green)' },
  { name: 'Pastel', colorCode: 'var(--pastel)' },
  { name: 'Light Brown', colorCode: 'var(--light-brown)' },
  { name: 'Yellow', colorCode: 'var(--primary-color)' },
  { name: 'Dark Gray', colorCode: 'var(--gray-darker)' },
  { name: 'Light Black', colorCode: 'var(--light-black)' },
];
