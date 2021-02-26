import { obtenerRobots } from "./arreglos";

// AL PONER UNA x DELANTE SALTARÍA LA PRUEBA Y NO LA EJECUTARÁ
describe('Pruebas de arreglos', () => {

    it('Debe de retornar al menos 3 robots', () => {

        const res = obtenerRobots();

        // expect(res.length).toBe(3);
        expect(res.length).toBeGreaterThanOrEqual(3);
    });

    // AL PONER UNA x DELANTE SALTARÍA LA PRUEBA Y NO LA EJECUTARÁ
    xit('Debe de existir MegaMan y Ultron', () => {

        const res = obtenerRobots();

        expect(res).toContain('MegaMan');
        expect(res).toContain('Ultron');
    });
});