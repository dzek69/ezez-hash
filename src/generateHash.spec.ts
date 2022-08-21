import { generateHash } from "./generateHash.js";

describe("generateHash", function() {
    it("should generate unique hash", async function() {
        const h1 = await generateHash();
        const h2 = await generateHash();
        h1.must.be.a.string();
        h2.must.be.a.string();
        h1.must.not.equal(h2);
    });

    it("should only use a-z characters in hash", async function() {
        const hash = await generateHash();
        hash.must.match(/^[a-z0-9]+$/i);
    });
});
