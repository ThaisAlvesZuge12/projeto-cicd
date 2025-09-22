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

    // Novos testes sugeridos
    @Test
    void testSomaNegativos() {
        assertEquals(-5, Main.soma(-2, -3));
    }

    @Test
    void testMultiplicaPorZero() {
        assertEquals(0, Main.multiplica(10, 0));
    }

    @Test
    void testEhParZero() {
        assertTrue(Main.ehPar(0));
    }

    @Test
    void testInverterPalavraVazia() {
        assertEquals("", Main.inverter(""));
    }

    @Test
    void testSaudacaoNaoNula() {
        assertNotNull(Main.saudacao());
    }
    @Test
void testSomaComZero() {
    assertEquals(7, Main.soma(7, 0));
}
}