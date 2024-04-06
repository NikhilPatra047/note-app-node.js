import { jest } from '@jest/globals';

jest.unstable_mockModule('../src/db.js', () => ({
  insert: jest.fn(), 
  saveDB: jest.fn(), 
  getDB: jest.fn()
}))

const { insert, getDB, saveDB } = await import('../src/db.js');
const { newNote, getAllNotes, removeNote } = await import('../src/notes.js');

beforeEach(() => {
  insert.mockClear(), 
  getDB.mockClear(), 
  saveDB.mockClear()
})

describe('cli app', () => {
  test('newNote inserts data and returns it', async () => {
    const note = 'This is my note';
    const tags = ['hello'];
    const newNotes = {
      tags,
      content: note,
      id: Date.now(),
    };
    insert.mockResolvedValue(newNotes); 
  
    const result = await newNote(newNotes.content, newNotes.tags); 
    expect(result).toEqual(newNotes);
    // toEqual is not a strict check. It is just checking the content of both the objects and returns true if the content is the same. 
  });
  
  test('getAllNotes returns all notes', async () => {
    const db = {
      notes: ['note1', 'note2', 'note3']
    };
    getDB.mockResolvedValue(db);
  
    const result = await getAllNotes();
    expect(result).toEqual(db.notes);
  });
  
  test('removeNote does nothing if id is not found', async () => {
    const notes = [
      { id: 1, content: 'note 1' },
      { id: 2, content: 'note 2' },
      { id: 3, content: 'note 3' },
    ];
    saveDB.mockResolvedValue(notes);
  
    const idToRemove = 4;
    const result = await removeNote(idToRemove);
    expect(result).toBeUndefined();
  });
})

// mockClear for each test to start from a clear state. We don't want the results of previous test to come up in the current test. 


// TDD means test-driven development which means write all the test cases even before the actual implementation of something is done. This ensures that code remains consistent and always delivers the result that we are expecting