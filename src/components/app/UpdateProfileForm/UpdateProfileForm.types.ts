import { DefaultValues } from 'react-hook-form'
import z from 'zod'

export const updateProfileSchema = z.object({
	fullname: z
		.string({ message: 'campo obrigatório' })
		.min(5, 'nome muito curto'),
	email: z.string({ message: 'campo obrigatório' }).email('email inválido'),
})

export type UpdateProfileSchema = z.infer<typeof updateProfileSchema>
export type UpdateProfileFormProps = {
	onSubmit: (data: UpdateProfileSchema) => void
	defaultValues?: DefaultValues<UpdateProfileSchema>
}
