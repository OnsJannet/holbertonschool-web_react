interface MajorCredits {
  credits: number;
  brand: 'firstBrand';
}
  
interface MinorCredits {
  credits: number;
  brand: 'secondBrand';
}
  
function sumMajorCredits (subject1: number, subject2: number) : number {
  return subject1 + subject2;
}
  
function sumMinorCredits (subject1: number, subject2: number) : number {
  return subject1 + subject2;
}
