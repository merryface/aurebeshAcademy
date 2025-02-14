import shuffle from "./shuffle";

export default async function(currentValue, randomiser) {
  // Use a Set to ensure unique options (including the correct letter)
  const optionSet = new Set();
  console.log(optionSet)

  optionSet.add(currentValue);
  while (optionSet.size < 4) {
    optionSet.add(await randomiser());
  }
  const newOptions = Array.from(optionSet);
  shuffle(newOptions);

  return newOptions;
};