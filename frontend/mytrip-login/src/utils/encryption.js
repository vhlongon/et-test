import cryptico from 'cryptico';
import {passKey, bits} from '../../server/encryption-secret';

// this is just a workaround for doing some encryption client side, which is not very effective
// the data should just be sent “unencrypted” over SSL, because SSL is going to safely encrypt and decrypt it.

// generate RSAKey 
const generateRSAKey = cryptico.generateRSAKey(passKey, bits);
// generate public key
const publicKeyString = cryptico.publicKeyString(generateRSAKey);

// generate the encrypted content
const generateEncryption = value => cryptico.encrypt(value, publicKeyString);

export { generateEncryption };