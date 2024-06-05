import { describe, it, assert } from "vitest";
import { generateAnswer } from "./langchain";

describe("LangChain", () => {
  it("Answers a question", async () => {
    const answer = await generateAnswer("Is the United Kingdom a country?");

    assert.equal(answer.trim(), "Yes");
  });

  it("Answers a question incorrectly", async () => {
    const answer = await generateAnswer("Is Amsterdam a city?");
    assert.notEqual(answer.trim(), "No.");
  });
});
