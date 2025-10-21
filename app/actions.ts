"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { prisma } from "./utils/db";
import { revalidatePath } from "next/cache";

export async function addToWatchList(formData: FormData) {
    "use server";

    const movieId = formData.get("movieId");
    const pathName = formData.get("pathName") as string;
    const session = await getServerSession(authOptions);

    await prisma.watchList.create({
        data: {
            userId: session?.user?.email as string,
            movieId: Number(movieId),
        }
    });
    revalidatePath(pathName)
}

export async function deleteFromWatchList(formData: FormData) {
    "use server";

    const watchListId = formData.get("watchListId") as string;
    const pathName = formData.get("pathName") as string;

    await prisma.watchList.delete({
        where: {
            id: watchListId,
        }
    });
    revalidatePath(pathName)
}

