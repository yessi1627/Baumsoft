import { useForm } from "react-hook-form";
import { useState } from "react";
import "./Login.css"; // ⭐ Importa los estilos

type LoginForm = {
  usuario: string;
  contraseña: string;
};

export default function Login({ onLogin }: { onLogin: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const [cargando, setCargando] = useState(false);
  const [errorAuth, setErrorAuth] = useState("");

  const onSubmit = (data: LoginForm) => {
    setErrorAuth("");
    setCargando(true);

    setTimeout(() => {
      if (data.usuario === "admin" && data.contraseña === "1234") {
        onLogin();
      } else {
        setErrorAuth("Credenciales incorrectas");
      }
      setCargando(false);
    }, 1200);
  };

  return (
    <div className="login-container">
      <h2>Iniciar sesión</h2>

      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Usuario</label>
          <input
            {...register("usuario", { required: "El usuario es obligatorio" })}
          />
          {errors.usuario && <p className="error">{errors.usuario.message}</p>}
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            {...register("contraseña", {
              required: "La contraseña es obligatoria",
            })}
          />
          {errors.contraseña && (
            <p className="error">{errors.contraseña.message}</p>
          )}
        </div>

        {errorAuth && <p className="error">{errorAuth}</p>}

        <button className="login-button" type="submit" disabled={cargando}>
          {cargando ? "Validando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
}
