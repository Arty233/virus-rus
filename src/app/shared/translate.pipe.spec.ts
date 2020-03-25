import { TranslatePipe} from './translate.pipe';
import { parentPort } from 'worker_threads';

const dictionary = {
    Russia: "России",
    China: "Китае",
    USA: "США",
    Italy: "Италии"
}

const randomValues = ['France', 'Germany', 'UK']

describe('Pipe: Translate', () => {
    let pipe: TranslatePipe;

    beforeEach(() => {
        pipe = new TranslatePipe();
    })

    it('should create', () => {
        expect(pipe).toBeTruthy();
      });

    it('should return valid value if exist', () => {
        for (let key of Object.keys(dictionary)) 
            expect(pipe.transform(key)).toBe(dictionary[key]); 
    });

    it('should return just a value if it not in dictionary', () => {
        for (let rand of randomValues)
            expect(pipe.transform(rand)).toBe(rand);
    });

    
})