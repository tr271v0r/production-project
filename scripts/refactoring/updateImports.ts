import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isAbsolute(value: string) {
    const layers = [
        'app',
        'shared',
        'pages',
        'entities',
        'widgets',
        'features',
    ];
    return layers.some((layer) => value.startsWith(layer));
}

files.forEach((sourceFile) => {
    const importDecalarations = sourceFile.getImportDeclarations();
    importDecalarations.forEach((importDecalaration) => {
        const value = importDecalaration.getModuleSpecifierValue();

        if (isAbsolute(value)) {
            importDecalaration.setModuleSpecifier(`@/${value}`);
        }
    });
});

project.save();
