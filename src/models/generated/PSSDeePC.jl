#=
This file is auto-generated. Do not edit.
=#

#! format: off

"""
    mutable struct PSSDeePC <: PSS
        ts::Float64
        tinitial::Float64
        tfinal::Float64
        T_ini::Int
        N::Int
        k::Int
        Q_factor::Float64
        lambda_g::Float64
        lambda_y::Float64
        u_d::Matrix{Float64}
        y_d::Matrix{Float64}
        y_ref::Vector{Float64}
        lower_u::Vector{Float64}
        upper_u::Vector{Float64}
        lower_y::Vector{Float64}
        upper_y::Vector{Float64}
        indexes_saved_outputs::Vector{Int}
        ext::Dict{String, Any}
        states::Vector{Symbol}
        n_states::Int
        internal::InfrastructureSystemsInternal
    end

Test PSS that uses DeePC.

# Arguments
- `ts::Float64`: Time step, validation range: `(0, nothing)`
- `tinitial::Float64`: Initial time, validation range: `(0, nothing)`
- `tfinal::Float64`: Final time, validation range: `(0, nothing)`
- `T_ini::Int`: DeePC T_ini parameter, validation range: `(0, nothing)`
- `N::Int`: DeePC N parameter, validation range: `(0, nothing)`
- `k::Int`: DeePC k parameter, validation range: `(0, nothing)`
- `Q_factor::Float64`: Multiplicative factor to get the matrix Q as Q = Q_factor * I, validation range: `(0, nothing)`
- `lambda_g::Float64`: DeePC lambda_g parameter, validation range: `(0, nothing)`
- `lambda_y::Float64`: DeePC lambda_y parameter, validation range: `(0, nothing)`
- `u_d::Matrix{Float64}`: Inputs' data obtained offline
- `y_d::Matrix{Float64}`: Outputs' data obtained offline
- `y_ref::Vector{Float64}`: Outputs' reference values
- `lower_u::Vector{Float64}`: Inputs' lower bounds
- `upper_u::Vector{Float64}`: Inputs' upper bounds
- `lower_y::Vector{Float64}`: Outputs' lower bounds
- `upper_y::Vector{Float64}`: Outputs' upper bounds
- `indexes_saved_outputs::Vector{Int}`: Indexes of the desired outputs in the saved_values_unique vector
- `ext::Dict{String, Any}`
- `states::Vector{Symbol}`
- `n_states::Int`: PSSDeePC has no states
- `internal::InfrastructureSystemsInternal`: power system internal reference, do not modify
"""
mutable struct PSSDeePC <: PSS
    "Time step"
    ts::Float64
    "Initial time"
    tinitial::Float64
    "Final time"
    tfinal::Float64
    "DeePC T_ini parameter"
    T_ini::Int
    "DeePC N parameter"
    N::Int
    "DeePC k parameter"
    k::Int
    "Multiplicative factor to get the matrix Q as Q = Q_factor * I"
    Q_factor::Float64
    "DeePC lambda_g parameter"
    lambda_g::Float64
    "DeePC lambda_y parameter"
    lambda_y::Float64
    "Inputs' data obtained offline"
    u_d::Matrix{Float64}
    "Outputs' data obtained offline"
    y_d::Matrix{Float64}
    "Outputs' reference values"
    y_ref::Vector{Float64}
    "Inputs' lower bounds"
    lower_u::Vector{Float64}
    "Inputs' upper bounds"
    upper_u::Vector{Float64}
    "Outputs' lower bounds"
    lower_y::Vector{Float64}
    "Outputs' upper bounds"
    upper_y::Vector{Float64}
    "Indexes of the desired outputs in the saved_values_unique vector"
    indexes_saved_outputs::Vector{Int}
    ext::Dict{String, Any}
    states::Vector{Symbol}
    "PSSDeePC has no states"
    n_states::Int
    "power system internal reference, do not modify"
    internal::InfrastructureSystemsInternal
end

function PSSDeePC(ts, tinitial, tfinal, T_ini, N, k, Q_factor, lambda_g, lambda_y, u_d, y_d, y_ref, lower_u, upper_u, lower_y, upper_y, indexes_saved_outputs, ext=Dict{String, Any}(), )
    PSSDeePC(ts, tinitial, tfinal, T_ini, N, k, Q_factor, lambda_g, lambda_y, u_d, y_d, y_ref, lower_u, upper_u, lower_y, upper_y, indexes_saved_outputs, ext, Vector{Symbol}(), 0, InfrastructureSystemsInternal(), )
end

function PSSDeePC(; ts, tinitial, tfinal, T_ini, N, k, Q_factor, lambda_g, lambda_y, u_d, y_d, y_ref, lower_u, upper_u, lower_y, upper_y, indexes_saved_outputs, ext=Dict{String, Any}(), states=Vector{Symbol}(), n_states=0, internal=InfrastructureSystemsInternal(), )
    PSSDeePC(ts, tinitial, tfinal, T_ini, N, k, Q_factor, lambda_g, lambda_y, u_d, y_d, y_ref, lower_u, upper_u, lower_y, upper_y, indexes_saved_outputs, ext, states, n_states, internal, )
end

# Constructor for demo purposes; non-functional.
function PSSDeePC(::Nothing)
    PSSDeePC(;
        ts=0,
        tinitial=0,
        tfinal=0,
        T_ini=0,
        N=0,
        k=0,
        Q_factor=0,
        lambda_g=0,
        lambda_y=0,
        u_d=Matrix{Float64}(undef,0,0),
        y_d=Matrix{Float64}(undef,0,0),
        y_ref=Vector{Float64}(undef,0),
        lower_u=Vector{Float64}(undef,0),
        upper_u=Vector{Float64}(undef,0),
        lower_y=Vector{Float64}(undef,0),
        upper_y=Vector{Float64}(undef,0),
        indexes_saved_outputs=Vector{Int}(undef,0),
        ext=Dict{String, Any}(),
    )
end

"""Get [`PSSDeePC`](@ref) `ts`."""
get_ts(value::PSSDeePC) = value.ts
"""Get [`PSSDeePC`](@ref) `tinitial`."""
get_tinitial(value::PSSDeePC) = value.tinitial
"""Get [`PSSDeePC`](@ref) `tfinal`."""
get_tfinal(value::PSSDeePC) = value.tfinal
"""Get [`PSSDeePC`](@ref) `T_ini`."""
get_T_ini(value::PSSDeePC) = value.T_ini
"""Get [`PSSDeePC`](@ref) `N`."""
get_N(value::PSSDeePC) = value.N
"""Get [`PSSDeePC`](@ref) `k`."""
get_k(value::PSSDeePC) = value.k
"""Get [`PSSDeePC`](@ref) `Q_factor`."""
get_Q_factor(value::PSSDeePC) = value.Q_factor
"""Get [`PSSDeePC`](@ref) `lambda_g`."""
get_lambda_g(value::PSSDeePC) = value.lambda_g
"""Get [`PSSDeePC`](@ref) `lambda_y`."""
get_lambda_y(value::PSSDeePC) = value.lambda_y
"""Get [`PSSDeePC`](@ref) `u_d`."""
get_u_d(value::PSSDeePC) = value.u_d
"""Get [`PSSDeePC`](@ref) `y_d`."""
get_y_d(value::PSSDeePC) = value.y_d
"""Get [`PSSDeePC`](@ref) `y_ref`."""
get_y_ref(value::PSSDeePC) = value.y_ref
"""Get [`PSSDeePC`](@ref) `lower_u`."""
get_lower_u(value::PSSDeePC) = value.lower_u
"""Get [`PSSDeePC`](@ref) `upper_u`."""
get_upper_u(value::PSSDeePC) = value.upper_u
"""Get [`PSSDeePC`](@ref) `lower_y`."""
get_lower_y(value::PSSDeePC) = value.lower_y
"""Get [`PSSDeePC`](@ref) `upper_y`."""
get_upper_y(value::PSSDeePC) = value.upper_y
"""Get [`PSSDeePC`](@ref) `indexes_saved_outputs`."""
get_indexes_saved_outputs(value::PSSDeePC) = value.indexes_saved_outputs
"""Get [`PSSDeePC`](@ref) `ext`."""
get_ext(value::PSSDeePC) = value.ext
"""Get [`PSSDeePC`](@ref) `states`."""
get_states(value::PSSDeePC) = value.states
"""Get [`PSSDeePC`](@ref) `n_states`."""
get_n_states(value::PSSDeePC) = value.n_states
"""Get [`PSSDeePC`](@ref) `internal`."""
get_internal(value::PSSDeePC) = value.internal

"""Set [`PSSDeePC`](@ref) `ts`."""
set_ts!(value::PSSDeePC, val) = value.ts = val
"""Set [`PSSDeePC`](@ref) `tinitial`."""
set_tinitial!(value::PSSDeePC, val) = value.tinitial = val
"""Set [`PSSDeePC`](@ref) `tfinal`."""
set_tfinal!(value::PSSDeePC, val) = value.tfinal = val
"""Set [`PSSDeePC`](@ref) `T_ini`."""
set_T_ini!(value::PSSDeePC, val) = value.T_ini = val
"""Set [`PSSDeePC`](@ref) `N`."""
set_N!(value::PSSDeePC, val) = value.N = val
"""Set [`PSSDeePC`](@ref) `k`."""
set_k!(value::PSSDeePC, val) = value.k = val
"""Set [`PSSDeePC`](@ref) `Q_factor`."""
set_Q_factor!(value::PSSDeePC, val) = value.Q_factor = val
"""Set [`PSSDeePC`](@ref) `lambda_g`."""
set_lambda_g!(value::PSSDeePC, val) = value.lambda_g = val
"""Set [`PSSDeePC`](@ref) `lambda_y`."""
set_lambda_y!(value::PSSDeePC, val) = value.lambda_y = val
"""Set [`PSSDeePC`](@ref) `u_d`."""
set_u_d!(value::PSSDeePC, val) = value.u_d = val
"""Set [`PSSDeePC`](@ref) `y_d`."""
set_y_d!(value::PSSDeePC, val) = value.y_d = val
"""Set [`PSSDeePC`](@ref) `y_ref`."""
set_y_ref!(value::PSSDeePC, val) = value.y_ref = val
"""Set [`PSSDeePC`](@ref) `lower_u`."""
set_lower_u!(value::PSSDeePC, val) = value.lower_u = val
"""Set [`PSSDeePC`](@ref) `upper_u`."""
set_upper_u!(value::PSSDeePC, val) = value.upper_u = val
"""Set [`PSSDeePC`](@ref) `lower_y`."""
set_lower_y!(value::PSSDeePC, val) = value.lower_y = val
"""Set [`PSSDeePC`](@ref) `upper_y`."""
set_upper_y!(value::PSSDeePC, val) = value.upper_y = val
"""Set [`PSSDeePC`](@ref) `indexes_saved_outputs`."""
set_indexes_saved_outputs!(value::PSSDeePC, val) = value.indexes_saved_outputs = val
"""Set [`PSSDeePC`](@ref) `ext`."""
set_ext!(value::PSSDeePC, val) = value.ext = val
