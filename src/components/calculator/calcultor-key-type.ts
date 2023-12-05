type KeyNumber = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type KeyOpUnary = '-/+' | '%';
type KeyOpBinary = '+' | '-' | '*' | '/';


export type Key = KeyNumber | KeyOpBinary | KeyOpUnary | 'C' | '.' | '=';