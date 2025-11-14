import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic d'authentification à implémenter
    console.log(isLogin ? "Login" : "Signup", { email, password });
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Auth Container */}
      <div className="relative w-full max-w-md mx-4">
        <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-glow-primary">
          {/* Glow border effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-xl" />
          
          <div className="relative z-10 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {isLogin ? "Connexion" : "Inscription"}
              </h1>
              <p className="text-muted-foreground">
                {isLogin ? "Bienvenue ! Connectez-vous à votre compte" : "Créez votre compte pour commencer"}
              </p>
            </div>

            {/* Form Container with Slide Animation */}
            <div className="relative overflow-hidden">
              <div
                className={`transition-all duration-500 ${
                  isLogin ? "translate-x-0" : "-translate-x-full opacity-0 absolute inset-0"
                }`}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="login-email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-input border-border focus:border-primary focus:shadow-glow-primary transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password" className="text-foreground">
                      Mot de passe
                    </Label>
                    <Input
                      id="login-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-input border-border focus:border-primary focus:shadow-glow-primary transition-all"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-glow-primary transition-all duration-300 font-semibold"
                  >
                    Se connecter
                  </Button>
                </form>
              </div>

              <div
                className={`transition-all duration-500 ${
                  !isLogin ? "translate-x-0" : "translate-x-full opacity-0 absolute inset-0"
                }`}
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="votre@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-input border-border focus:border-primary focus:shadow-glow-primary transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-foreground">
                      Mot de passe
                    </Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-input border-border focus:border-primary focus:shadow-glow-primary transition-all"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirm-password" className="text-foreground">
                      Confirmer le mot de passe
                    </Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="bg-input border-border focus:border-primary focus:shadow-glow-primary transition-all"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-accent to-secondary hover:shadow-glow-accent transition-all duration-300 font-semibold"
                  >
                    S'inscrire
                  </Button>
                </form>
              </div>
            </div>

            {/* Toggle Button */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-3">
                {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}
              </p>
              <Button
                type="button"
                variant="outline"
                onClick={toggleMode}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                {isLogin ? "Créer un compte" : "Se connecter"}
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary rounded-full opacity-20 animate-glow-pulse" />
        <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-accent rounded-full opacity-20 animate-glow-pulse" style={{ animationDelay: "1s" }} />
      </div>
    </div>
  );
};

export default Auth;
