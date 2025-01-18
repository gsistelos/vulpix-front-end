import { AuthCard } from "@/components/auth-tabs/auth-card";
import { LoginForm } from "@/components/auth-tabs/login-form";
import { RegisterForm } from "@/components/auth-tabs/register-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface AuthTabsProps {
  defaultValue: "register" | "login";
}

export async function AuthTabs({ defaultValue }: AuthTabsProps) {
  return (
    <div className="flex justify-center">
      <Tabs defaultValue={defaultValue} className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="register">Register</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="register">
          <AuthCard title="Register" description="Create your account:">
            <RegisterForm />
          </AuthCard>
        </TabsContent>
        <TabsContent value="login">
          <AuthCard title="Login" description="Enter your account:">
            <LoginForm />
          </AuthCard>
        </TabsContent>
      </Tabs>
    </div>
  );
}
