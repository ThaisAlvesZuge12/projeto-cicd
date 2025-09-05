import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class MainTest {

    @Test
    void testSaudacao() {
        assertEquals("Olá, CI/CD funcionando!", Main.saudacao());
    }

    @Test
    void testSoma() {
        assertEquals(5, Main.soma(2, 3));
    }

    @Test
    void testEhPar() {
        assertTrue(Main.ehPar(4));
        assertFalse(Main.ehPar(5));
    }

    @Test
    void testMultiplica() {
        assertEquals(12, Main.multiplica(3, 4));
    }

    @Test
    void testInverter() {
        assertEquals("cba", Main.inverter("abc"));
    }
}