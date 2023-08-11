import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Label,
  Input,
  Button,
  WindmillContext,
} from "@roketid/windmill-react-ui";
import { GithubIcon, TwitterIcon } from "icons";

function LoginPage() {
  const { mode } = useContext(WindmillContext);
  const imgSource =
    mode === "dark"
      ? "/assets/img/login-office-dark.jpeg"
      : "/assets/img/login-office-dark.jpeg";

  // State untuk menyimpan nilai pilihan dari select option
  const [selectedRole, setSelectedRole] = useState("admin");

  const handleRoleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSelectedRole(event.target.value);
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-100">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="relative h-32 md:h-auto md:w-1/2">
            <head>
              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
              />
              <meta name="description" content="" />
              <meta name="author" content="" />
              <title>Login</title>
              <link rel="icon" href="/favicon.ico" />
            </head>

            <Image
              aria-hidden="true"
              className="hidden object-cover w-full h-full"
              src={imgSource}
              alt="Office"
              layout="fill"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Login Admin
              </h1>
              <Label>
                <span>Email</span>
                <Input className="mt-1" type="email" placeholder="Email" />
              </Label>

              <Label className="mt-4">
                <span>Password</span>
                <Input
                  className="mt-1"
                  type="password"
                  placeholder="***************  "
                />
              </Label>

              {/* Select option untuk memilih role */}
              <Label className="mt-4">
                <span>Loket</span>
                <select
                  value={selectedRole}
                  onChange={handleRoleChange}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
                >
                  <option value="loket1">Loket 1</option>
                  <option value="loket2">Loket 2</option>
                  <option value="loket3">Loket 3</option>
                </select>
              </Label>

              <Link href="/example" passHref={true}>
                <Button className="mt-4" block>
                  Log in
                </Button>
              </Link>

              <hr className="my-8" />

              <p className="mt-4">
                <Link href="/example/forgot-password">
                  <a className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                    Forgot your password?
                  </a>
                </Link>
              </p>
              <p className="mt-1">
                <Link href="/example/create-account">
                  <a className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline">
                    Create account
                  </a>
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
