import { Project, SyntaxKind, ObjectLiteralExpression, PropertyAssignment, ArrayLiteralExpression } from 'ts-morph';

const project = new Project();
const sourceFile = project.addSourceFileAtPath('src/lib/languages.ts');

const languagesObj = sourceFile.getVariableDeclaration('LANGS')?.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);

if (!languagesObj) throw new Error("languages not found");

// Get the Spanish 'es' object to extract chapters 7-15
const esProp = languagesObj.getProperty('"es"') || languagesObj.getProperty('es');
if (!esProp || esProp.getKind() !== SyntaxKind.PropertyAssignment) throw new Error("es property not found");

const esObj = (esProp as PropertyAssignment).getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);
const esChaptersProp = esObj.getProperty('"chapters"') || esObj.getProperty('chapters');
if (!esChaptersProp || esChaptersProp.getKind() !== SyntaxKind.PropertyAssignment) throw new Error("es chapters not found");

const esChaptersArr = (esChaptersProp as PropertyAssignment).getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);

const esChapters = esChaptersArr.getElements();

// Extract chapters beyond index 5 (chapters 7 through 15)
const newChaptersText = esChapters.slice(6).map(c => c.getText());

const allLangProps = languagesObj.getProperties();

for (const prop of allLangProps) {
  if (prop.getKind() === SyntaxKind.PropertyAssignment) {
    const langProp = prop as PropertyAssignment;
    const langName = langProp.getName().replace(/['"]/g, '');
    if (langName === 'es') continue;
    
    console.log(`Processing ${langName}...`);
    const langObj = langProp.getInitializerIfKindOrThrow(SyntaxKind.ObjectLiteralExpression);
    const chaptersProp = langObj.getProperty('"chapters"') || langObj.getProperty('chapters');
    if (!chaptersProp || chaptersProp.getKind() !== SyntaxKind.PropertyAssignment) continue;

    const chaptersArr = (chaptersProp as PropertyAssignment).getInitializerIfKindOrThrow(SyntaxKind.ArrayLiteralExpression);
    
    // Add the extra chapters if they haven't been added already
    if (chaptersArr.getElements().length < 15) {
      for (const text of newChaptersText) {
        chaptersArr.addElement(text);
      }
    } else {
       console.log(`  Skipping ${langName}, already has ${chaptersArr.getElements().length} chapters.`);
    }
  }
}

sourceFile.saveSync();
console.log('Done!');
