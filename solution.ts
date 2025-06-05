const words: string[] = ['desserts', 'stressed', 'bats', 'stab', 'are', 'era', 'buss','not'];
const phrases: string[] = ['bats are not stressed'];

alert(substitutions(words, phrases));

function substitutions(words: string[], phrases: string[]): number[] {
  const wordGroups: Map<string, Set<string>> = new Map<string, Set<string>>();

  words.forEach((word: string) => {
    const sortedWord = word.split('').sort().join('');

    if (!wordGroups.has(sortedWord)) {
      wordGroups.set(sortedWord, new Set());
    }
    wordGroups.get(sortedWord)!.add(word);
  });

  const result: number[] = phrases.map(phrase => {
    const phraseWords = phrase.split(' ');
    let combinations = 1;

    for (const word of phraseWords) {
      const sortedWord = word.split('').sort().join('');
      if (wordGroups.has(sortedWord)) {
        combinations *= wordGroups.get(sortedWord)!.size;
      }
    }

    return combinations;
  });

  return result;
}
