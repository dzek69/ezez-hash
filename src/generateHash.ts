import * as crypto from "crypto";

const DEFAULT_HASH_LENGTH = 16;

/**
 * Generates ASCII-only hash from a given length of bytes
 * @param {number} bytes - how many bytes should be used to generate hash, this is NOT expected length of ASCII-hash
 * @returns {Promise<string>} - generated hash
 */
const generateHash = (bytes = DEFAULT_HASH_LENGTH) => {
    return new Promise<string>((resolve, reject) => {
        crypto.randomBytes(bytes, (err, buf) => {
            if (err) {
                reject(err);
                return;
            }

            resolve(buf.toString("base64").replace(/[^a-z\d]/gi, "X"));
        });
    });
};

export { generateHash };
