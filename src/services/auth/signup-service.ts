import bcrypt from "bcrypt";
import { UserRepository } from "@/repositories/user-repository";

export async function signupService(name: string, email: string, password: string) {
  const userRepository = new UserRepository();

  try {
    // Check if email already exists
    const existing = await userRepository.findByEmail(email);
    if (existing) {
      return { code: 400, status: "error", message: "Email already exists" };
    }

    // Insert User Account
    const createdUser = await userRepository.create({ name, email, password: await bcrypt.hash(password, 10) as string });

    // Return success response
    return {
      code: 200,
      status: "success",
      message: "Created account successfully! Please verify your email.",
      data: { user: createdUser }
    };

  } catch (error: any) {
    console.error("SignupUserService error", error);
    const detail = error?.cause?.message || error?.message || "Unable to create account";
    return { code: 500, status: "error", message: detail };
  }
}