const zeroSymbols = 0;
const twoSymbols = 2;
const fourSymbols = 4;

export const formatPassport = (passport: string) => `${passport.slice(zeroSymbols, twoSymbols)}
 ${passport.slice(twoSymbols, fourSymbols)} 
 ${passport.slice(fourSymbols)}`;
