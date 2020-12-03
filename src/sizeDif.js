export default function sizeDif(file1, file2) {
  let result = Math.floor((file2 / file1)*100);
  return result;
}